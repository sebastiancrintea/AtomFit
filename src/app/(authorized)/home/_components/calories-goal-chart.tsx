"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoGoal } from "react-icons/go";
import { GiMeal } from "react-icons/gi";
import { FaBurn } from "react-icons/fa";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  {
    goal: "lose",
    lost: 300,
    fill: "var(--color-goal)",
    start: 1980,
    finish: 0,
  },
];

const chartConfig = {
  lost: {
    label: "kg lost",
  },
  goal: {
    label: "Lose",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function CaloriesGoalChart() {
  const loseGoal = chartData[0].start - chartData[0].finish;  
  return (
    <Card className="flex w-full flex-col border-2 bg-popover">
      <CardHeader className="items-center pb-0 pt-2">
        <CardTitle>Calories</CardTitle>
        <CardDescription className="text-xl">
          Remaining = Goal - Food + Exercise
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] flex-1"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={(chartData[0].lost / loseGoal) * 360}
            innerRadius={80}
            outerRadius={140}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="lost" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {(
                            chartData[0].start - chartData[0].lost
                          ).toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Remaining
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <section className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <GoGoal size={32} />
            <div>
              <h4>Base Goal</h4>
              <span className="text-muted-foreground">
                {chartData[0].start.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <GiMeal size={32} />
            <div>
              <h4>Food</h4>
              <span className="text-muted-foreground">
                {chartData[0].start.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaBurn size={32} />
            <div>
              <h4>Exercise</h4>
              <span className="text-muted-foreground">
                {chartData[0].start.toLocaleString()}
              </span>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
