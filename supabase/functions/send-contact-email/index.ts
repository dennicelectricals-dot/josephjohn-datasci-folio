import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Received contact form submission");
    
    const { name, email, message }: ContactEmailRequest = await req.json();

    console.log("Processing email for:", email);

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "Joseph John <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for reaching out!",
      html: `
        <h1>Thank you for contacting me, ${name}!</h1>
        <p>I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>Joseph John</p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to Joseph
    const notificationEmailResponse = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["godenaanjay@gmail.com"],
      subject: `New Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        userEmail: userEmailResponse,
        notificationEmail: notificationEmailResponse 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
