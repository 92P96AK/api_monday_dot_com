
# Monday.com Integration Feature For Monday Boards
This repo include custom  integration feature for monday boards and use it to listen on the board item "numbers" column changes. When you change the value of "numbers" column in monday.com board, you will store/update that value to your mongoDB database, mande some changes to that value and cast result to a column named "result".

## How to use this repo 

1. Create Monday.com Account
2. Enable developer mode
3. Get Monday Api Token
4. Clone this repo.

 ``
 git clone https://github.com/92P96AK/api_monday_dot_com.git
 ``

5. Navigate to api_monday_dot_com folder, create .env file and put all required variables.

Here are required environment variables. you can also fount it in .env.example file.

``
PORT, NODE_ENV, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_HOST, DATABASE_PORT, DATABASE_URL=mongodb://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?authSource=admin, 
MONDAY_API_END_POINT, 
MONDAY_TOKEN
``

6. Run 
`` docker compose-up ``

if it require permission then use,

``sudo docker-compose up``

4. Create webhook 
  You can use monday.com playground to create webhook as,

  ``
  mutation{
  create_webhook(
    board_id:{{board_id},
   url:"{{path_to_web_hook_url}}",
   event:change_specific_column_value,
   config:"{\"columnId\":\"{{name_of_column}}\"}")
  {
    id
    board_id
}
}
  ``

  https://monday.com/developers/v2/try-it-yourself

  or use api endpoint they provide to create webhook

  ``
  https://api.monday.com/v2

  ``

This is post method and require body params as 

``
{
    "query": "mutation {create_webhook (board_id: {{board_id}, url:"{{path_to_web_hook_url}}", event: change_status_column_value, config: \"{\\\"columnId\\\":\\\"{{name_of_column}}\\\") {id board_id}}" 
}
``

If you run this code on local server , make sure to use some reverse proxy service like ngrok. it will create publicly available url so that monday.com can send event. 

This is all, when you make change in specific column from monday board, it will multiply the value by 5 and call monday.com api to cast into result column.

