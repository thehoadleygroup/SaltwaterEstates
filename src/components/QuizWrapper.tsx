"use client";

import { useRouter } from "next/navigation";
import WaterfrontQuiz, { WaterfrontQuizResult } from "@/components/WaterfrontQuiz";

export default function QuizWrapper() {
  const router = useRouter();

  function handleComplete(result: WaterfrontQuizResult) {
    const params = new URLSearchParams();
    if (result.vesselLengthFt > 0) params.set("loa", String(result.vesselLengthFt));
    if (result.vesselDraftFt > 0) params.set("draft", String(result.vesselDraftFt));
    if (result.fixedBridges === "no") params.set("bridge", "no");
    if (result.minWaterDepthFt > 0) params.set("depth", String(result.minWaterDepthFt));
    if (result.waterAccessTypes.length > 0) params.set("access", result.waterAccessTypes.join(","));
    if (result.priceMaxM > 0) params.set("price", String(result.priceMaxM * 1_000_000));
    if (result.bedrooms > 0) params.set("beds", String(result.bedrooms));

    router.push(`/search?${params.toString()}`);
  }

  return <WaterfrontQuiz onComplete={handleComplete} />;
}
