import ContactForm from "@/components/Contact/ContactForm";
import RenderMap from "@/components/Contact/RenderMap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { House, Phone } from "lucide-react";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

export default function ContactBody() {
  // Coordinates for Ghoshpara, Bagjola, South Dumdum, Kolkata
  const position = [22.6357, 88.4174];

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="md:text-right text-center w-max">
          <p className="font-semibold text-lg cursor-pointer flex items-center justify-center md:justify-end gap-2">
            <House />
            Address
          </p>
          <p className="text-muted-foreground">Ghoshpara, Bagjola, South Dumdum</p>
          <p className="text-muted-foreground">Kolkata-700074, West Bengal</p>
        </div>

        <div className="w-max">
          <p className="font-semibold text-lg cursor-pointer flex items-center justify-center md:justify-start gap-2">
            <Phone />
            Contact Us
          </p>
          <p className="text-muted-foreground">
            Phone:{" "}
            <Button variant="link" asChild className="p-0 m-0 h-auto">
              <a href="tel:+919876543210">+91 9876543210</a>
            </Button>
          </p>
          <p className="text-muted-foreground">
            Email:{" "}
            <Button variant="link" asChild className="p-0 m-0 h-auto">
              <a href="mailto:kushalbairagya@example.com">kushalbairagya@gmail.com</a>
            </Button>
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Operating Hours</h2>
        <p className="text-muted-foreground">Monday - Friday: 10 AM - 10 PM</p>
        <p className="text-muted-foreground">Saturday - Sunday: 12 PM - 11 PM</p>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Follow Us</h2>
        <div className="flex justify-center gap-4 mt-2">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/menuapp" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
            <a href="https://www.twitter.com/menuapp" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/menuapp" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <RenderMap position={position}>
          📍 **Ghoshpara, Bagjola** <br />
          South Dumdum, Kolkata-700074, West Bengal
        </RenderMap>
      </div>

      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Write to us</h1>

        <Card className="p-4 mb-14 w-[min(100%,600px)] mx-auto">
          <ContactForm />
        </Card>
      </div>
    </>
  );
}
