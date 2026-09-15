import { createFileRoute } from "@tanstack/react-router";
import { HospitalityServicePage } from "./services.hospitality";

export const Route = createFileRoute("/hospitality")({
  component: HospitalityServicePage,
});
