import Header from "../components/Header";

export function Contact() {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="bg-BGform w-1/2 h-screen bg-cover bg-no-repeat border-r-2 border-violet-500" />
        <div className="flex items-center justify-center mt-32 w-1/2 p-4 pt-0 ">
          <form className="flex flex-col w-full gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Nome
              </label>
              <input
                className="h-10 border-2 border-gray-200 px-3 text-base rounded focus:outline-none focus:ring-0 focus:border-2 focus:border-violet-500"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Email
              </label>
              <input
                className="h-10 border-2 border-gray-200 px-3  text-base rounded focus:outline-none focus:ring-0 focus:border-2 focus:border-yellow-600"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="font-medium text-base">
                Sua mensagem
              </label>
              <textarea
                className="rounded border-2 border-gray-200 p-3 text-base focus:outline-none focus:ring-0 focus:border-2 focus:border-gray-700"
                cols={30}
                rows={5}
              ></textarea>
            </div>
            <div>
              <button id="contact-btn">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="#ffd833"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Enviar mensagem</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
