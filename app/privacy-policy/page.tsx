import { Container } from "@/components/container/container";
import { Markdown } from "@/components/shared/markdown";
import { getPrivacyPolicy } from "@/actions/get-content";

export default async function PrivacyPolicyPage() {
  const privacy = await getPrivacyPolicy();

  return (
    <Container className="my-20">
      <Markdown markdown={privacy.content || ""} />
    </Container>
  );
}
