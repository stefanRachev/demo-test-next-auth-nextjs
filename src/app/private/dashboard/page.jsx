//src/app/private/dashboard/page.jsx

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-gray-100 dark:bg-gray-950">
        <div className="p-6 grid gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text 2xl font-bold">$45,231,87</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Subscriptions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text 2xl font-bold">+2360</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text 2xl font-bold">+12,234</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text 2xl font-bold">+578</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">+234% since last hour</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
