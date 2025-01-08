import UpdateHeroSectionButton from "@/components/buttons/update-hero-section-button";
import { getCaseStudies } from "@/service/caseStudy";
import { getFeedbacks } from "@/service/feedback";
import { loadHeroSectionData } from "@/service/heroSection";
import { getServices } from "@/service/service";
import { getWorks } from "@/service/work";
import { TCaseStudy } from "@/types/caseStudy";
import { TFeedback } from "@/types/feedback";
import { TService } from "@/types/service";
import { TWork } from "@/types/work";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BiBookOpen } from "react-icons/bi";
import { FaRegHandshake } from "react-icons/fa";
import { MdMiscellaneousServices, MdWorkOutline } from "react-icons/md";

export const metadata: Metadata = {
  title: "Admin Dashboard | Digital Agency",
  description: "Overview of your digital agency's content and statistics",
};

const DashboardPage = async () => {
  // Fetch data with limit=5 for recent items
  const [servicesRes, worksRes, caseStudiesRes, feedbacksRes, heroSectionRes] =
    await Promise.all([
      getServices(),
      getWorks(),
      getCaseStudies(),
      getFeedbacks(),
      loadHeroSectionData(),
    ]);

  const services: TService[] = servicesRes?.data || [];
  const works: TWork[] = worksRes?.data || [];
  const caseStudies: TCaseStudy[] = caseStudiesRes?.data || [];
  const feedbacks: TFeedback[] = feedbacksRes?.data || [];

  const stats = [
    {
      title: "Total Services",
      count: servicesRes?.meta?.total || 0,
      icon: MdMiscellaneousServices,
      link: "/admin/add-service",
      color: "bg-blue-500",
    },
    {
      title: "Total Works",
      count: worksRes?.meta?.total || 0,
      icon: MdWorkOutline,
      link: "/admin/add-work",
      color: "bg-green-500",
    },
    {
      title: "Case Studies",
      count: caseStudiesRes?.meta?.total || 0,
      icon: BiBookOpen,
      link: "/admin/add-case-study",
      color: "bg-purple-500",
    },
    {
      title: "Client Feedbacks",
      count: feedbacksRes?.meta?.total || 0,
      icon: FaRegHandshake,
      link: "/admin/add-feedback",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-4">
      {/* Hero Section Update Button */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Hero Section</h2>
            <p className="text-sm text-gray-500 mt-1">
              Update your website&apos;s hero section content
            </p>
          </div>
          <UpdateHeroSectionButton initialData={heroSectionRes?.data} />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Link
            key={stat.title}
            href={stat.link}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-semibold mt-1">{stat.count}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-full text-white`}>
                <stat.icon size={24} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Items Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent Works */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Works</h2>
            <Link
              href="/admin/add-work"
              className="text-primary hover:text-primary/80 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="divide-y">
            {works.map((work) => (
              <div key={work._id} className="py-3 flex items-center gap-3">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={48}
                  height={48}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="font-medium">{work.title}</h3>
                  <div className="flex gap-1 mt-1">
                    {work.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {work.tags.length > 2 && (
                      <span className="text-xs text-gray-500">
                        +{work.tags.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Case Studies */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Case Studies</h2>
            <Link
              href="/admin/add-case-study"
              className="text-primary hover:text-primary/80 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="divide-y">
            {caseStudies.map((study) => (
              <div key={study._id} className="py-3 flex items-center gap-3">
                <Image
                  src={study.image}
                  alt={study.name}
                  width={48}
                  height={48}
                  className="rounded object-cover"
                />
                <div>
                  <h3 className="font-medium">{study.name}</h3>
                  <p className="text-sm text-gray-500">
                    Service: {study.service.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Services */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Services</h2>
            <Link
              href="/admin/add-service"
              className="text-primary hover:text-primary/80 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="divide-y">
            {services.map((service) => (
              <div key={service._id} className="py-3">
                <h3 className="font-medium">{service.name}</h3>
                {service.description && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {service.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Recent Feedbacks */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Recent Feedbacks</h2>
            <Link
              href="/admin/add-feedback"
              className="text-primary hover:text-primary/80 text-sm"
            >
              View All
            </Link>
          </div>
          <div className="divide-y">
            {feedbacks.map((feedback) => (
              <div key={feedback._id} className="py-3 flex items-center gap-3">
                <Image
                  src={feedback.avatar}
                  alt={feedback.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">
                    {feedback.companyName}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
