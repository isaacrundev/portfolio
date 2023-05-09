import {
  contactEmail,
  contactGithub,
  contactLinkedIn,
  contactTelegram,
} from "../assets";

const contactMethods = [
  {
    name: "email",
    link: "https://formsubmit.co/el/dobuye",
    icon: contactEmail,
  },
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/isaac-842886255/",
    icon: contactLinkedIn,
  },
  {
    name: "github",
    link: "https://github.com/isaacrundev",
    icon: contactGithub,
  },
  {
    name: "Telegram",
    link: "https://t.me/isaacrundev",
    icon: contactTelegram,
  },
];

const Contact = () => {
  return (
    <section id="contact">
      <div className="flex flex-col ">
        <div className="flex flex-col justify-center basis-24">
          <p className="text-3xl font-semibold">Contact</p>
        </div>
        <div className="flex flex-col mt-40">
          <div>
            <p className="py-5 text-2xl text-center">You can find me on:</p>
          </div>
          <div className="flex gap-4">
            {contactMethods.map((each) => (
              <div id={each.name} className="m-0 rounded-full w-14">
                <a href={each.link} target="_blank">
                  <img src={each.icon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     formState: { errors },
//   } = useForm<FormData>();
//   const onsubmit = async (data) => {
//     const isValid = await trigger();
//     !isValid && data.preventDefault();
//     console.log(data);
//   };

// <form
//   className="flex items-center py-4"
//   method="POST"
//   onSubmit={handleSubmit(onsubmit)}
// >
//   <div className="flex flex-col w-2/5 max-w-sm gap-2">
//     <label htmlFor="input-name">Name</label>
//     <input
//       id="input-name"
//       className="contact-input"
//       {...register("name", { required: true, maxLength: 32 })}
//     />
//     {/* {errors.name && (
//       <p className="my-2">
//         {errors.name.type === "required" && requiredErrorMsg}
//         {errors.name.type === "maxLength" && maxLengthErrorMsg}
//       </p>
//     )} */}
//     <label htmlFor="input-email">Email</label>
//     <input
//       id="input-email"
//       className="contact-input"
//       {...(register("email"), { required: true, maxLength: 64 })}
//     />
//     {/* {errors.email && (
//       <p className="my-2">
//         {errors.email.type === "required" && requiredErrorMsg}
//         {errors.email.type === "maxLength" && maxLengthErrorMsg}
//       </p>
//     )} */}
//     <label htmlFor="input-message">Message</label>
//     <textarea
//       id="input-message"
//       rows={8}
//       className="resize-none contact-input"
//       {...register("message", { required: true, maxLength: 512 })}
//     />
//     {/* {errors.message && (
//       <p className="my-2">
//         {errors.message.type === "required" && requiredErrorMsg}
//         {errors.message.type === "maxLength" && maxLengthErrorMsg}
//       </p>
//     )} */}
//     <button
//       type="submit"
//       className="py-1 my-3 transition-transform transform bg-orange-700 rounded-md hover:bg-orange-600 active:scale-95"
//     >
//       Send
//     </button>
//   </div>
// </form>
