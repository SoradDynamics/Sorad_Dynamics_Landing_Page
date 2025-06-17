
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Users, BookOpen, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductShowcase = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Nepali Calendar Support",
      description: "नेपाली पात्रो अनुसार"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Bus Live Tracking",
      description: "Real-time location tracking"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notification",
      description: "Send notifications and updates"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Assignment Management",
      description: "Assignments and homework tracking"
    }
  ];

  return (
    <section id="project" className="py-36 h-full flex items-center justify-center ">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                School Management System
              </h2>
              <p className="text-xl text-gray-600 mb-2 leading-relaxed">
                विद्यालय व्यवस्थापनका लागि एक संपूर्ण समाधान। 
              </p>

              <p className=" text-xl text-gray-600 mb-12  leading-relaxed">
              Complete school management 
                solution designed specifically for Nepali educational institutions with 
                modern features and local customizations.
              </p>

              <div className="grid sm:grid-cols-2 gap-y-8 gap-x-5 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/school-management-system">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                    Learn More
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
                {/* <Button variant="outline" size="lg">
                  Request Demo
                </Button> */}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative bg-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">1,234</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">56</div>
                        <div className="text-sm text-gray-600">Teachers</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm text-gray-600">Attendance</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Today's Classes</span>
                        <span className="text-sm font-semibold text-blue-600">12 Active</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Bus Status</span>
                        <span className="text-sm font-semibold text-green-600">All On Route</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm">Pending Tasks</span>
                        <span className="text-sm font-semibold text-orange-600">5 Items</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
