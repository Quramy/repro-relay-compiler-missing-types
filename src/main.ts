import { graphql } from "relay-runtime";
import type { main_Query$data } from "./__generated__/main_Query.graphql";

const query = graphql`
  query main_Query {
    viewer @catch(to: RESULT) {
      name
    }
  }
`;

function assertDataType(data: main_Query$data) {
  // @ts-expect-error expected viewer to be Result type but got any.
  data.viewer.name;

  if (data.viewer.ok) {
    console.log(data.viewer.value);
  }
}
