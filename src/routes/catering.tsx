import { createFileRoute } from "@tanstack/react-router";
import { CateringServicePage } from "./services.catering";

export const Route = createFileRoute("/catering")({
  component: CateringServicePage,
});
