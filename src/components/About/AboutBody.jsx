import React from "react";
import { Star, Utensils, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

export default function AboutBody() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

      <section className="max-w-3xl mx-auto text-center space-y-6">
        <p className="text-lg text-muted-foreground">
          Welcome to <strong>{import.meta.env.VITE_APP_NAME}</strong>! We are passionate about great food, excellent service, and creating
          unforgettable dining experiences.
        </p>

        <p>
          Since <strong>2025</strong>, we’ve been serving authentic <strong>fast food</strong> cuisine made with fresh, high-quality ingredients.
          Whether you're a longtime customer or a first-time visitor, we promise a meal that delights your taste buds.
        </p>
      </section>

      <Card className="mt-12 bg-gray-100 dark:bg-gray-800 p-6 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground">
          At <strong>{import.meta.env.VITE_APP_NAME}</strong>, our goal is simple – to serve delicious, wholesome meals made with love. We believe
          that food brings people together, and we strive to create a space where families and friends can enjoy great flavors.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-4">
          <div className="flex items-center space-x-2">
            <Utensils className="text-primary" />
            <span>Authentic Recipes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Leaf className="text-primary" />
            <span>Fresh Ingredients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="text-primary" />
            <span>Customer Satisfaction</span>
          </div>
        </div>
      </Card>

      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">Our Specialties</h2>
        <p className="text-muted-foreground">We take pride in our signature dishes, crafted with love and tradition.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <Card className="dark:bg-gray-900 p-4">
            <h3 className="text-xl font-semibold">🍛 Biriyani</h3>
            <p className="text-muted-foreground">A delicious blend of spices and flavors that makes this our most-loved dish.</p>
          </Card>

          <Card className="dark:bg-gray-900 p-4">
            <h3 className="text-xl font-semibold">🍲 Chilli Chicken</h3>
            <p className="text-muted-foreground">A mouth-watering delicacy that has won the hearts of our customers.</p>
          </Card>
        </div>
      </section>

      <section className="mt-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold">What Our Customers Say</h2>
        <p className="text-muted-foreground">Here’s what our happy customers have to say:</p>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <Card className="bg-gray-100 dark:bg-gray-800 p-4">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
            </div>
            <p className="italic">"Amazing food and great service! Definitely coming back."</p>
            <p className="font-semibold mt-2">- Rahul S.</p>
          </Card>

          <Card className="bg-gray-100 dark:bg-gray-800 p-4">
            <div className="flex items-center justify-center gap-2">
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
              <Star className="text-yellow-400" size={24} />
            </div>
            <p className="italic">"The best Biriyani I’ve had! Highly recommended!"</p>
            <p className="font-semibold mt-2">- Priya M.</p>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center mb-14">
        <h2 className="text-2xl font-semibold">Visit Us Today!</h2>
        <p className="text-muted-foreground">
          Experience the taste and hospitality of <strong>{import.meta.env.VITE_APP_NAME}</strong>. Whether you dine in or order online, we promise a
          delightful experience.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" asChild>
            <Link to="/">View Menu</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
