import { Spin } from "antd";
import styled from "@emotion/styled";
import { DevTools } from "jira-dev-tool";

export const Row = styled.div<{
  gap?: number | string | boolean;
  marginBottom?: number;
  between?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + "rem" : 0};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => {
  return (
    <FullPage>
      <Spin size="large"></Spin>
    </FullPage>
  );
};

export const FullPageErrorFallBack = ({ error }: { error: Error | null }) => (
  <FullPage>
    <DevTools />
    {error?.message}
  </FullPage>
);
