import React from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { CheckCircle, Leaf, Store, Coins } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800">
      <header className="p-6 flex items-center justify-between bg-white shadow-md">
        <h1 className="text-3xl font-bold text-green-600">RecyclePay</h1>
        <Button className="bg-green-500 hover:bg-green-600 text-white">Download App</Button>
      </header>

      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Earn Rewards for Recycling!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Recycle your waste. Earn points. Get discounts. Help the planet. Everyone wins!
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-3 rounded-full">
          Get Started
        </Button>
      </section>

      <section className="grid md:grid-cols-4 gap-6 px-8 py-12 bg-green-50">
        <Card>
          <CardContent className="p-6 text-center">
            <Leaf className="mx-auto text-green-500" size={32} />
            <h3 className="font-semibold text-lg mt-4">Recycle Waste</h3>
            <p className="text-sm text-gray-600 mt-2">Plastic, paper, metal, or e-waste – give it to us.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Coins className="mx-auto text-yellow-500" size={32} />
            <h3 className="font-semibold text-lg mt-4">Earn Points</h3>
            <p className="text-sm text-gray-600 mt-2">Get rewarded based on the weight and type of waste.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Store className="mx-auto text-blue-500" size={32} />
            <h3 className="font-semibold text-lg mt-4">Use at Local Stores</h3>
            <p className="text-sm text-gray-600 mt-2">Redeem points for discounts at cafes, shops, and more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <CheckCircle className="mx-auto text-purple-500" size={32} />
            <h3 className="font-semibold text-lg mt-4">Support Kabaadiwalas</h3>
            <p className="text-sm text-gray-600 mt-2">They earn a stable income by collecting waste via app.</p>
          </CardContent>
        </Card>
      </section>

      <section className="py-16 px-8 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How We Make Money</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Referral Commission</h3>
              <p className="text-gray-600">We take a small cut when users spend points at local businesses.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Service Fee</h3>
              <p className="text-gray-600">Kabaadiwalas pay a nominal fee for app features and access.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">B2B Partnerships</h3>
              <p className="text-gray-600">Partner with corporates & governments for bulk waste pickup.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-green-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why RecyclePay Works</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
          We're the first in India to connect recycling with local rewards. A win-win-win for the environment, small businesses, and everyday users.
        </p>
        <ul className="text-left max-w-xl mx-auto space-y-4">
          <li className="flex items-start"><CheckCircle className="text-green-500 mr-2" /> Promotes sustainability while supporting local economy</li>
          <li className="flex items-start"><CheckCircle className="text-green-500 mr-2" /> Scalable: Start in one city, expand nationwide</li>
          <li className="flex items-start"><CheckCircle className="text-green-500 mr-2" /> Makes recycling rewarding, not a chore</li>
        </ul>
      </section>

      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2025 RecyclePay. Made with ♻️ for a cleaner tomorrow.
      </footer>
    </div>
  );
}

export default App;