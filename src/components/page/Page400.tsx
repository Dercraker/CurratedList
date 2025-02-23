import Link from "next/link";
import { ContactSupportDialog } from "../contact/support/ContactSupportDialog";
import { buttonVariants } from "../ui/button";
import { Typography } from "../ui/typography";

export function Page400() {
  return (
    <main className="flex flex-col items-center gap-8">
      <div className="max-w-lg space-y-3 text-center">
        <Typography variant="code">400</Typography>
        <Typography variant="h1">Oh No! Unexpected Error.</Typography>
        <Typography>
          It seems we're experiencing some technical difficulties. Not to worry,
          our team is working on it. In the meantime, try refreshing the page or
          visiting us a bit later.
        </Typography>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className={buttonVariants({ variant: "invert" })}>
          Go back home
        </Link>
        <ContactSupportDialog />
      </div>
    </main>
  );
}
