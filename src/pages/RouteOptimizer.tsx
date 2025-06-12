
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { MapIcon, Navigation as NavigationIcon, Clock, Zap } from "lucide-react";

const RouteOptimizer = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [optimizing, setOptimizing] = useState(false);

  const handleOptimize = () => {
    setOptimizing(true);
    // Simulate optimization process
    setTimeout(() => {
      setOptimizing(false);
    }, 2000);
  };

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
          {/* Input Form */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <NavigationIcon className="w-5 h-5 mr-2 text-green-600" />
                  Route Parameters
                </CardTitle>
                <CardDescription>
                  Enter your journey details for optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="origin">Starting Point</Label>
                  <Input
                    id="origin"
                    placeholder="Enter origin (e.g., CBD Nairobi)"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <Input
                    id="destination"
                    placeholder="Enter destination (e.g., Westlands)"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="vehicle-type">Vehicle Type</Label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private-car">Private Car</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="public-transport">Public Transport</SelectItem>
                      <SelectItem value="delivery-truck">Delivery Truck</SelectItem>
                      <SelectItem value="bicycle">Bicycle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleOptimize} 
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={!origin || !destination || !vehicleType || optimizing}
                >
                  {optimizing ? "Optimizing..." : "Optimize Route"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Map and Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map Placeholder */}
            <Card className="h-96">
              <CardContent className="h-full p-0">
                <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapIcon className="w-16 h-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">Interactive Route Map</h3>
                    <p className="text-gray-500">
                      Map integration will display optimized routes with real-time traffic data
                    </p>
                  </div>
                </div>
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

        {/* Additional Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Real-time Traffic</h3>
              <p className="text-sm text-gray-600">Live traffic data from NTSA and local sources</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fuel Optimization</h3>
              <p className="text-sm text-gray-600">AI algorithms to minimize fuel consumption</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapIcon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Multi-modal Routes</h3>
              <p className="text-sm text-gray-600">Combine different transport modes efficiently</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <NavigationIcon className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Predictive Analysis</h3>
              <p className="text-sm text-gray-600">Future traffic patterns and congestion hotspots</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RouteOptimizer;
