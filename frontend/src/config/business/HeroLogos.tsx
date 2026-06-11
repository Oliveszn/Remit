import {
  AWSMark,
  BinanceMark,
  GoogleMark,
  MetaMark,
  NotionMark,
  SlackMark,
} from "@/components/Business/Logos";

export const LOGOS = [
  {
    name: "Google",
    icon: <GoogleMark />,
    pos: { top: "14%", left: "5%" },
    amp: 12,
    dur: 3.8,
    delay: 0,
  },
  {
    name: "AWS",
    icon: <AWSMark />,
    pos: { top: "52%", left: "3%" },
    amp: 10,
    dur: 4.4,
    delay: 0.6,
  },
  {
    name: "Notion",
    icon: <NotionMark />,
    pos: { top: "76%", left: "11%" },
    amp: 14,
    dur: 3.2,
    delay: 1.2,
  },
  {
    name: "Meta",
    icon: <MetaMark />,
    pos: { top: "12%", right: "5%" },
    amp: 11,
    dur: 4.1,
    delay: 0.3,
  },
  {
    name: "Slack",
    icon: <SlackMark />,
    pos: { top: "50%", right: "3%" },
    amp: 13,
    dur: 3.6,
    delay: 0.9,
  },
  {
    name: "Binance",
    icon: <BinanceMark />,
    pos: { top: "74%", right: "10%" },
    amp: 9,
    dur: 4.8,
    delay: 1.5,
  },
];
