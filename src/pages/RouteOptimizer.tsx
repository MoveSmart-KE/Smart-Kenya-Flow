
import Map from "@/components/Map";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Navigation as NavigationIcon, Clock, Zap } from "lucide-react";

const RouteOptimizer = () => {  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Route Optimizer</h1>
          <p className="text-lg text-gray-600">
            Find the most fuel-efficient and time-optimal routes for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map and Results */}
          <div className="lg:col-span-3 space-y-9">
            {/* Map Placeholder */}
            <Card className="h-96">
              <CardContent className="h-full p-0">
                <Map  />
              </CardContent>
            </Card>

            {/* Route Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    Fastest Route
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-green-700">22 min</p>
                    <p className="text-sm text-gray-600">Via Uhuru Highway</p>
                    <p className="text-sm text-green-600">15% faster than usual</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-blue-600" />
                    Most Eco-Friendly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-blue-700">26 min</p>
                    <p className="text-sm text-gray-600">Via Ngong Road</p>
                    <p className="text-sm text-blue-600">2.3L fuel saved</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg flex items-center">
                    <NavigationIcon className="w-5 h-5 mr-2 text-yellow-600" />
                    Balanced Route
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-yellow-700">24 min</p>
                    <p className="text-sm text-gray-600">Via Mombasa Road</p>
                    <p className="text-sm text-yellow-600">Optimal balance</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default RouteOptimizer;
