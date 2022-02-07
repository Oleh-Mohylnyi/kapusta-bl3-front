import PageContainer from "../../components/PageContainer";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import Summary from "./../../components/Summary/Summary";

export default function MainView() {
  return (
    <PageContainer>
      <BackgroundImages />
      <Summary />
    </PageContainer>
  );
}
