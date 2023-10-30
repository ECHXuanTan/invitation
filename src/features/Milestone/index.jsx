import { Timeline } from "flowbite-react";
import {
  HiBriefcase,
  HiMiniAcademicCap,
  HiRocketLaunch,
} from "react-icons/hi2";
import Title from "../../components/Title";

export default function Milestone() {
  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16 bg-blue-900">
      <Title blurredText="Pass" text="Milestone" isLight={false} />
      <div className="flex justify-center">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiRocketLaunch} />
            <Timeline.Content>
              <Timeline.Title className="mb-2 ml-8 text-left text-xl text-white">
                Start to study at HCMUS
              </Timeline.Title>
              <Timeline.Time className="text-xl">August 2019</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiMiniAcademicCap} />
            <Timeline.Content>
              <Timeline.Title className="mb-2 ml-8 text-left text-xl text-white">
                Graduate from HCMUS
              </Timeline.Title>
              <Timeline.Time className="text-xl">July 2023</Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiBriefcase} />
            <Timeline.Content>
              <Timeline.Title className="ml-8 text-left text-white">
                ???
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </section>
  );
}
