<?php

/**
 * This file is part of ubykuo site
 * @author Valentin Mari <valen.mari@ubykuo.com>
 * @desc Mailer for contact
 * 21/04/2017
 */

namespace ubykuo;

use ReCaptcha\ReCaptcha;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

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
    private function getMessage($companyName, $emailAddress, $message, UploadedFile $adjunto = null)
    {
        $mje = \Swift_Message::newInstance(MAILER_SUBJECT)
            ->setFrom(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->setTo(array(MAILER_TO_MAIL => MAILER_TO_NAME))
            ->addReplyTo(array($emailAddress, $companyName))
            ->setBody("Company name: {$companyName}\nEmail: {$emailAddress}\nMessage: {$message}");

        if ($adjunto) {
            $mje->attach(\Swift_Attachment::fromPath($adjunto->getPath()));
        }

        return $mje;
    }

    /**
     * @param Request $request
     * @return boolean
     */
    public function handle(Request $request)
    {
        $companyName = $request->request->get('company_name');
        $emailAddress = $request->request->get('email_address');
        $message = $request->request->get('message');
        $adjunto = $request->files->get('adjunto');
        $gResponse = $request->request->get('g-recaptcha-response');

        $g = new ReCaptcha(GOOGLE_RECAPTCHA_SECRET_KEY);
        $resp = $g->verify($gResponse, $request->getClientIp());

        if ($resp->isSuccess()) {
            $this->getMailer()->send($this->getMessage($companyName, $emailAddress, $message, $adjunto));
            return true;
        } else {
            return false;
        }
    }
}
