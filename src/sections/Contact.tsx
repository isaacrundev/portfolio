import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <section id="contact" className="">
      <form className="flex items-center " onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col w-2/5 max-w-sm gap-2">
          <label htmlFor="input-name">Name</label>
          <input
            id="input-name"
            className="contact-input"
            {...register("name")}
          />
          <label htmlFor="input-email">Email</label>
          <input
            id="input-email"
            className="contact-input"
            {...register("email")}
          />{" "}
          <label htmlFor="input-message">Message</label>
          <textarea
            id="input-message"
            rows={8}
            className="resize-none contact-input"
            {...register("message")}
          />
          <button
            type="button"
            className="py-1 my-3 transition-transform transform bg-orange-700 rounded-md hover:bg-orange-600 active:scale-95"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
