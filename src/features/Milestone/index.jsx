import { Timeline } from "flowbite-react";
import { useTranslation } from "react-i18next";
import {
  HiBriefcase,
  HiMiniAcademicCap,
  HiRocketLaunch,
} from "react-icons/hi2";
import Title from "../../components/Title";

export default function Milestone() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-4 sm:px-40 sm:py-16 bg-blue-900">
      <Title
        blurredText={t("milestone.pass")}
        text={t("milestone.title")}
        isLight={false}
      />
      <div className="flex justify-center">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiRocketLaunch} />
            <Timeline.Content>
              <Timeline.Title className="mb-2 ml-8 text-left text-xl text-white">
                {t("milestone.start")}
              </Timeline.Title>
              <Timeline.Time className="text-xl">
                {t("milestone.startTime")}
              </Timeline.Time>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiMiniAcademicCap} />
            <Timeline.Content>
              <Timeline.Title className="mb-2 ml-8 text-left text-xl text-white">
                {t("milestone.graduate")}
              </Timeline.Title>
              <Timeline.Time className="text-xl">
                {t("milestone.graduateTime")}
              </Timeline.Time>
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
