"use client";

import { useState } from "react";

type FormValues = {
  country: string;
  subject: string;
  name: string;
  email: string;
  message: string;
  agree: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  country: "",
  subject: "",
  name: "",
  email: "",
  message: "",
  agree: false,
};

const fieldClass =
  "w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-black/80 focus:outline-none focus:ring-2 focus:ring-[#28b7b3] focus:border-[#28b7b3] transition-colors";
const labelClass =
  "block font-semibold text-[16px] md:text-[18px] text-black mb-2";
const errorClass = "mt-1.5 text-[13px] text-red-600";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function borderClass(hasError: boolean) {
  return hasError
    ? "border-red-500 ring-2 ring-red-200"
    : "border-gray-400/70";
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v: FormValues): FormErrors {
    const next: FormErrors = {};
    if (!v.country) next.country = "Please select a country.";
    if (!v.subject) next.subject = "Please choose a subject.";
    if (!v.name.trim()) next.name = "Please enter your name.";
    if (!v.email.trim() || !isValidEmail(v.email))
      next.email = "Please enter a valid email.";
    if (!v.message.trim()) next.message = "Please enter a message.";
    if (!v.agree) next.agree = "You must agree before submitting.";
    return next;
  }

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => {
      const nextValues = { ...prev, [key]: value };
      // Clear the error for this field once it becomes valid.
      setErrors((prevErrors) => {
        if (!prevErrors[key]) return prevErrors;
        const fieldErrors = validate(nextValues);
        if (fieldErrors[key]) return prevErrors;
        const cleared = { ...prevErrors };
        delete cleared[key];
        return cleared;
      });
      return nextValues;
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-8">
        <div className="text-center py-10">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#9de5e3]">
            <svg
              className="h-8 w-8 text-[#28b7b3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h4 className="font-semibold text-[22px] text-black">
            Thanks for reaching out!
          </h4>
          <p className="mt-2 text-[16px] text-black/70">
            We&rsquo;ll get back to you shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <form noValidate onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="cf-country" className={labelClass}>
              Country
            </label>
            <select
              id="cf-country"
              name="country"
              value={values.country}
              onChange={(e) => update("country", e.target.value)}
              className={`${fieldClass} ${borderClass(!!errors.country)}`}
            >
              <option value="" disabled>
                Select a country
              </option>
              <option value="ireland">Ireland</option>
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="other">Other</option>
            </select>
            {errors.country ? (
              <p className={errorClass}>{errors.country}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="cf-subject" className={labelClass}>
              Subject
            </label>
            <select
              id="cf-subject"
              name="subject"
              value={values.subject}
              onChange={(e) => update("subject", e.target.value)}
              className={`${fieldClass} ${borderClass(!!errors.subject)}`}
            >
              <option value="" disabled>
                Reason for contact
              </option>
              <option value="sales">Sales enquiry</option>
              <option value="support">Technical support</option>
              <option value="billing">Billing</option>
              <option value="other">Other</option>
            </select>
            {errors.subject ? (
              <p className={errorClass}>{errors.subject}</p>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="cf-name" className={labelClass}>
              Full name
            </label>
            <input
              type="text"
              id="cf-name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={(e) => update("name", e.target.value)}
              className={`${fieldClass} ${borderClass(!!errors.name)}`}
            />
            {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
          </div>

          <div>
            <label htmlFor="cf-email" className={labelClass}>
              Email
            </label>
            <input
              type="email"
              id="cf-email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={(e) => update("email", e.target.value)}
              className={`${fieldClass} ${borderClass(!!errors.email)}`}
            />
            {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
          </div>
        </div>

        <div className="mt-6">
          <label htmlFor="cf-message" className={labelClass}>
            Your Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${fieldClass} resize-y ${borderClass(!!errors.message)}`}
          />
          {errors.message ? (
            <p className={errorClass}>{errors.message}</p>
          ) : null}
        </div>

        <div className="mt-6">
          <label className="flex items-start gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              id="cf-agree"
              name="agree"
              checked={values.agree}
              onChange={(e) => update("agree", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-400 text-[#28b7b3] focus:outline-none focus:ring-2 focus:ring-[#28b7b3]"
            />
            <span className="text-[13px] leading-relaxed text-black/80">
              I agree to the Privacy Policy and Terms and Conditions.
            </span>
          </label>
          {errors.agree ? <p className={errorClass}>{errors.agree}</p> : null}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#28b7b3] px-10 py-4 font-semibold text-[18px] text-white shadow-[0px_3px_10px_0px_rgba(0,0,0,0.26)] hover:bg-[#229794] transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
