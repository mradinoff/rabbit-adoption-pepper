import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon,
	LinkedinShareButton,
	LinkedinIcon,
	EmailIcon,
} from "react-share";

type FormData = {
	name: string;
	email: string;
	phone: string;
	message: string;
};

type FormValues = {
	name: string;
	email: string;
	phone: string;
	message: string;
};

const schema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	phone: z.string().regex(/^04\d{8}$/, {
		message: "Contact number must be an Australian contact number",
	}),
	message: z
		.string()
		.min(50, {
			message: "Please provide a message with at least 50 characters",
		})
		.max(500, {
			message: "Please provide a message with at most 500 characters",
		}),
});

const Form = () => {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};
	const url = typeof window !== "undefined" ? window.location.href : "";
	const title = "Check out this cute rabbit up for adoption!";

	return (
		<section className="px-6 py-52 min-h-screen">
			<div className="mx-auto flex flex-col gap-y-12 max-w-2xl">
				<h2 className="text-center text-5xl font-bold">
					Ready to add some Pepper to your life?
				</h2>
				<form
					className="flex flex-col gap-y-6"
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="name">Name:</label>
						<Controller
							name="name"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									type="text"
									{...field}
									className="input input-bordered w-full"
									placeholder="Name"
								/>
							)}
						/>
						{errors.name && <p className="text-error">{errors.name.message}</p>}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="email">Email:</label>
						<Controller
							name="email"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									type="email"
									{...field}
									className="input input-bordered w-full"
								/>
							)}
						/>
						{errors.email && (
							<p className="text-error">{errors.email.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="phone">Phone:</label>
						<Controller
							name="phone"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<input
									type="tel"
									{...field}
									className="input input-bordered w-full"
								/>
							)}
						/>
						{errors.phone && (
							<p className="text-error">{errors.phone.message}</p>
						)}
					</div>
					<div className="flex flex-col gap-y-2">
						<label htmlFor="message">Message:</label>
						<Controller
							name="message"
							control={control}
							rules={{ required: true }}
							render={({ field }) => (
								<textarea {...field} className="textarea textarea-bordered" />
							)}
						/>
						{errors.message && (
							<p className="text-error">{errors.message.message}</p>
						)}
					</div>
					<button
						className="btn btn-secondary btn-outline self-center animate-bounce"
						type="submit"
						disabled={isSubmitting}
					>
						Meet Pepper
					</button>
				</form>
				<div className="divider text-4xl my-8 text-primary">OR</div>
				<h2 className="text-5xl font-bold text-center">
					Know someone who would love to adopt Pepper?
				</h2>
				<div>
					<div className="flex items-center gap-4 justify-center">
						<FacebookShareButton url={url} quote={title}>
							<FacebookIcon size={48} round />
						</FacebookShareButton>
						<TwitterShareButton url={url} title={title}>
							<TwitterIcon size={48} round />
						</TwitterShareButton>
						<WhatsappShareButton url={url} title={title}>
							<WhatsappIcon size={48} round />
						</WhatsappShareButton>
						<EmailShareButton url={url} subject={title} body={url}>
							<EmailIcon size={48} round />
						</EmailShareButton>
						<LinkedinShareButton url={url} title={title}>
							<LinkedinIcon size={48} round />
						</LinkedinShareButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Form;
