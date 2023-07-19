<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Otp;

class emailVerificationNotification extends Notification
{
    use Queueable;

    private $mailer;
    private $mes;
    private $subject;
    private $otp;
    private $fromEmail;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->mes = "use the below code for verification process";
        $this->subject = "verification needed";
        $this->mailer = "smtp";
        $this->fromEmail ="bosiebrahem487@gmail.com";
        $this->otp = new Otp;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $otp = $this->otp->generate($notifiable->email, 7, 60);
        return (new MailMessage)
                    ->mailer('smtp')
                    ->subject($this->subject)
                    ->line($this->mes)
                    ->line('code : '.$otp->token)
                    ->line('thank you');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
