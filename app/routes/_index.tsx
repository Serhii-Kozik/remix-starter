import {
  json,
  type MetaFunction,
  type LoaderFunctionArgs,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import i18nServer from "~/modules/i18n.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const t = await i18nServer.getFixedT(request);
  const res = await fetch("https://be-api.dev/test");
  const text = await res.text();
  return json({ description: t("description"), res: text });
}

export default function Index() {
  const { t } = useTranslation();
  const { description, res } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-bold ">{t("intro")}</h1>
      <p>{description}</p>
      <p>{`Server responds with ${res}`}</p>
    </div>
  );
}
