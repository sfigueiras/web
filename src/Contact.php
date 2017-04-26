<?php

/**
 * This file is part of ubykuo site
 * @author Valentin Mari <valen.mari@ubykuo.com>
 * @desc Mailer for contact
 * 21/04/2017
 */

namespace ubykuo;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;

class Contact
{
    /**
     * @return \Swift_Mailer
     */
    private function getMailer()
    {
        $transport = \Swift_SmtpTransport::newInstance(SMTP_HOST, SMTP_PORT);
        $transport->setUsername(SMTP_USER);
        $transport->setPassword(SMTP_PASS);

        return \Swift_Mailer::newInstance($transport);
    }

    /**
     * @return \Swift_Message
     */
    private function getMessage($companyName, $emailAddress, $message)
    {
        return \Swift_Message::newInstance(MAILER_SUBJECT)
            ->setFrom(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->setTo(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->addReplyTo(array($emailAddress, $companyName))
            ->setBody("Company name: {$companyName}\nEmail: {$emailAddress}\nMessage: {$message}");
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function handle(Request $request)
    {
        $companyName = $request->request->get('company_name');
        $emailAddress = $request->request->get('email_address');
        $message = $request->request->get('message');

        $this->getMailer()->send($this->getMessage($companyName, $emailAddress, $message));
        return true;
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function handleJoinUs(Request $request)
    {
        $cv = $request->files->get('cv');

        $ms = \Swift_Message::newInstance(MAILER_SUBJECT)
            ->setFrom(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->setTo(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->addPart($cv->getRealPath(), $cv->getMimeType())
            ->setBody('Nuevo curriculum ha sido enviado desde la web de ubykuo.');

        $numSent = $this->getMailer()->send($ms);
        
        return true;
    }
}