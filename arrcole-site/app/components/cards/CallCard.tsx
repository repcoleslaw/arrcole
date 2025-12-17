import { Card } from "../Card";

export function CallCard() {
  return (
    <Card title="How I work">
      <h4 className="mb-2 font-semibold">01 Discovery Call</h4>
      <p className="text-sm text-neutral-600 mb-2">
        We’ll make a 30 minute free consultation to talk about your specific
        needs.
      </p>
      <h4 className="mb-2 font-semibold">02 Solution Proposal & Alignment</h4>
      <p className="text-sm text-neutral-600 mb-2">
        We’ll take some time to evaluate creative options and bring you a detailed plan of attack. Complete with a communication plan and an aligned definition of success.
      </p>
      <h4 className="mb-2 font-semibold">03 Execution</h4>
      <p className="text-sm text-neutral-600">
        We go off and do what we said we would do. It’s that simple.
      </p>
    </Card>
  );
}
