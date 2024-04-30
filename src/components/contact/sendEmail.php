<?php

// Récupérer les données du formulaire
$name = filter_input(INPUT_POST, 'name', FILTER_CALLBACK, array('options' => 'htmlspecialchars'));
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
$message = filter_input(INPUT_POST, 'message', FILTER_CALLBACK, array('options' => 'htmlspecialchars'));

// Vérifier si les données sont valides
if ($name && $email && $message) {
     // Nettoyer et valider l'adresse e-mail de l'expéditeur
     $cleanedEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

     // Vérifier si l'adresse e-mail est valide
     if ($cleanedEmail !== false) {
          // Composer les en-têtes de l'e-mail
          $headers = "From: " . htmlspecialchars($cleanedEmail) . "\r\n";
          $headers .= "Reply-To: " . htmlspecialchars($cleanedEmail);
          $to = "contact@hugoportfolio.xyz";
          $subject = "Nouveau message depuis le site";

          // Composer le contenu de l'e-mail
          $content = "Full Name: $name\n";
          $content .= "Email: $cleanedEmail\n";
          $content .= "Message: $message\n";

          // Envoi de l'e-mail
          if (mail($to, $subject, $content, $headers)) {
               // Envoi de la réponse automatique
               // Envoi de la réponse automatique
               $sender = $cleanedEmail;
               $autoReplySubject = "Automatic Reply - Réponse automatique - Hugo";
               $autoReplyContent = "
Bonjour,

Je vous remercie d'avoir visité mon portfolio et pris le temps de me contacter. Je suis ravi de votre intérêt.

Je tiens à vous informer que j'ai bien reçu votre message et je l'ai noté. Je suis actuellement en train d'examiner attentivement son contenu. Votre demande est importante pour moi, et je vais m'assurer de vous répondre dans les plus brefs délais.

Je vous remercie encore une fois pour votre intérêt et votre patience. Si vous avez d'autres questions ou avez besoin de plus d'informations, n'hésitez pas à me contacter. Je serai ravi de vous aider.

Cordialement,

Hugo

---------------

Hello,

Thank you for visiting my portfolio and taking the time to reach out. I appreciate your interest.

I want to inform you that I have received your message and have taken note of it. I am currently carefully reviewing its contents. Your request is important to me, and I will make sure to respond to you as soon as possible.

Thank you once again for your interest and patience. If you have any further questions or need additional information, please feel free to contact me. I would be happy to assist you.

Best regards,

Hugo
";
               $autoReplyHeaders = "From: Contact <contact@hugoporfolio.xyz>\r\nReply-To: $sender";

               mail($sender, $autoReplySubject, $autoReplyContent, $autoReplyHeaders);

               echo "Le message a été envoyé avec succès !";
          } else {
               echo "Erreur lors de l'envoi de l'e-mail !";
          }
     } else {
          echo "L'adresse e-mail n'est pas valide !";
     }
} else {
     echo "Données du formulaire invalides !";
}
