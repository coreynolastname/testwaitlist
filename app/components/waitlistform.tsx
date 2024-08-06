import '../styles/waitlistform.css'
import { redirect } from "next/navigation";

async function create(data:FormData) {
  "use server"
  const formData = {
      phone: data.get("phone")!.toString(), //exclamation means non nullable
  }
  await prisma.waitlist.create({data:formData})
  redirect("/investors")
}

export default function Waitlistform() {
  return (
    <div className="waitlist-form"> 
      <form action={create}>
        <input
          type="tel"
          name="phone" 
          id="phone"
          placeholder="Phone Number"
          required
        />
        <button type="submit">Join Waitlist</button>
      </form>
    </div>
  );
}
