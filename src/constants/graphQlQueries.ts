export const GRAPHQL_QUERIES = {
  //   GET_USERS_INFO: "query {users {created_at email account { name id }}}",
  //   GET_ALL_BOARDS: "query {boards  { name id } }",
  //   GET_COLS_OF_BOARD: "query {boards(ids: [{{BOARD_IDS}}]) {columns {id title }}}",
  CHANGE_COLS_VALUE:
    "mutation {change_simple_column_value(item_id: {{ITEM_ID}}, board_id: {{BOARD_ID}}, column_id: \"{{COL_ID}}\",value: \"{{COL_VALUE}}\") {id}}",
};
