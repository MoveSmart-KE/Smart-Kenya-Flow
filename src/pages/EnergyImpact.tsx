
import Navigation from "@/components/Navigation";
import MetricCard from "@/components/MetricCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Leaf, BarChart3, Target, Calendar } from "lucide-react";

const EnergyImpact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Energy Impact Dashboard</h1>
          <p className="text-lg text-gray-600">
            Track fuel savings and emissions reduction through optimized routing
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Fuel Saved Today (L)"
            value="2,847"
            change="+12.5%"
            icon={Zap}
            changeType="increase"
          />
          <MetricCard
            title="CO₂ Reduced (kg)"
            value="6,742"
            change="+8.3%"
            icon={Leaf}
            changeType="increase"
          />
          <MetricCard
            title="Cost Savings (KES)"
            value="₹421,890"
            change="+15.2%"
            icon={TrendingUp}
            changeType="increase"
          />
          <MetricCard
            title="Efficiency Score"
            value="87%"
            change="+4.1%"
            icon={Target}
            changeType="increase"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Environmental Impact */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-green-600" />
                  Environmental Impact Tracker
                </CardTitle>
                <CardDescription>
                  Real-time environmental benefits from route optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Daily CO₂ Reduction Target</span>
                        <span className="text-green-600">89% achieved</span>
                      </div>
                      <Progress value={89} className="h-3 bg-gray-200">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{width: '89%'}} />
                      </Progress>
                      <p className="text-xs text-gray-600 mt-1">6,742 kg of 7,600 kg target</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Fuel Efficiency Improvement</span>
                        <span className="text-blue-600">78% achieved</span>
                      </div>
                      <Progress value={78} className="h-3 bg-gray-200">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{width: '78%'}} />
                      </Progress>
                      <p className="text-xs text-gray-600 mt-1">2,847L saved of 3,650L target</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Traffic Congestion Reduction</span>
                        <span className="text-purple-600">67% achieved</span>
                      </div>
                      <Progress value={67} className="h-3 bg-gray-200">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '67%'}} />
                      </Progress>
                      <p className="text-xs text-gray-600 mt-1">Optimized 1,429 of 2,100 routes</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Leaf className="w-4 h-4 text-green-600" />
                        <span className="font-semibold text-green-800">Trees Equivalent</span>
                      </div>
                      <p className="text-2xl font-bold text-green-700">127</p>
                      <p className="text-xs text-green-600">Trees saved today through CO₂ reduction</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Zap className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-blue-800">Energy Equivalent</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-700">4,231 kWh</p>
                      <p className="text-xs text-blue-600">Renewable energy equivalent of fuel saved</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-600" />
                  Monthly Trends
                </CardTitle>
                <CardDescription>
                  Historical performance and projections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">This Month</p>
                      <p className="text-2xl font-bold text-green-700">89,420L</p>
                      <p className="text-xs text-green-600">Fuel Saved</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">Last Month</p>
                      <p className="text-2xl font-bold text-blue-700">78,150L</p>
                      <p className="text-xs text-blue-600">+14.4% improvement</p>
                    </div>
                    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                      <p className="text-sm text-purple-600 font-medium">Projection</p>
                      <p className="text-2xl font-bold text-purple-700">102,890L</p>
                      <p className="text-xs text-purple-600">Next Month</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">January 2024</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-green-600 rounded-full" style={{width: '65%'}} />
                        </div>
                        <span className="text-sm text-gray-600">65,430L</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">February 2024</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-green-600 rounded-full" style={{width: '78%'}} />
                        </div>
                        <span className="text-sm text-gray-600">78,150L</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">March 2024</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 h-2 bg-gray-200 rounded-full">
                          <div className="h-full bg-blue-600 rounded-full" style={{width: '89%'}} />
                        </div>
                        <span className="text-sm text-gray-600">89,420L</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sustainability Goals */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Sustainability Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-800">2024 Target</span>
                    <Badge className="bg-green-600">On Track</Badge>
                  </div>
                  <p className="text-xs text-green-600 mb-2">1M liters fuel saved annually</p>
                  <Progress value={23.8} className="h-2" />
                  <p className="text-xs text-green-600 mt-1">238,420L achieved (23.8%)</p>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-blue-800">UN SDG 11</span>
                    <Badge variant="outline" className="border-blue-600 text-blue-600">Active</Badge>
                  </div>
                  <p className="text-xs text-blue-600">Sustainable Cities & Communities</p>
                </div>

                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-800">Kenya Vision 2030</span>
                    <Badge variant="outline" className="border-purple-600 text-purple-600">Aligned</Badge>
                  </div>
                  <p className="text-xs text-purple-600">Clean Energy & Transport</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Achievement Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-green-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">100,000L Milestone</p>
                    <p className="text-xs text-gray-600">Achieved March 15, 2024</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">50 Partner Fleets</p>
                    <p className="text-xs text-gray-600">Achieved February 28, 2024</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-2 border-l-4 border-yellow-400 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <div>
                    <p className="text-sm font-medium">250,000L Milestone</p>
                    <p className="text-xs text-gray-600">Target: April 30, 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Impact Calculator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">If current trends continue</p>
                    <p className="text-2xl font-bold text-green-600">1.2M L</p>
                    <p className="text-xs text-gray-600">Annual fuel savings projection</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-bold text-gray-800">₹18.2M</p>
                      <p className="text-xs text-gray-600">Cost Savings</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-bold text-gray-800">2,847 T</p>
                      <p className="text-xs text-gray-600">CO₂ Reduction</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyImpact;
