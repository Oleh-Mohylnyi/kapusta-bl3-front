import PageContainer from "../../components/PageContainer";
import BackgroundImages from "../../components/BackgroundLayouts/PrivatePageBg";
import SectionTransactions from "../../components/SectionTransactions";
import TableData from "./../../components/SectionTransactions/TableData/TableData";

export default function MainView() {
  return (
    <PageContainer>
      <BackgroundImages />
      <SectionTransactions />
      <TableData />
    </PageContainer>
  );
}
