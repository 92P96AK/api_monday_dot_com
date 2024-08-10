import { WebClient } from "@slack/web-api";
import { config } from "../infrastructure";
import { ERROR_NOTIFYING_SLACK } from "../constants";
import { Log } from "../helper";

const { token, channelId } = config.slack;
const slackOptions = {};
const web = new WebClient(token, slackOptions);

export const NotifySlack = async (
  text: string,
  channel: string = channelId
) => {
  return new Promise(async (resolve, _) => {
    try {
      await web.chat.postMessage({
        text,
        channel,
      });
      return resolve(true);
    } catch (error) {
      Log.error({
        message: ERROR_NOTIFYING_SLACK,
        error,
      });
      return resolve(true);
    }
  });
};
