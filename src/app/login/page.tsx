export default function Login() {
  return (
    <div className="flex md:items-center justify-center min-h-screen bg-white dark:bg-googlebgdarkpanel md:bg-googlebg md:dark:bg-googlebgdark">
      <div className="w-[500px] p-8 bg-white dark:bg-googlebgdarkpanel rounded-3xl shadow-lg">
        <img src="google_logo.png" width={50} className="mb-5"/>
        <h2 className="text-3xl text-left mb-6">Login</h2>
        <p className="mb-8">Gunakan Akun Google Anda</p>
        <form className="space-y-4">
          <div className="relative w-full">
            <input
              type="email"
              id="email"
              required
              className="peer w-full p-3 bg-transparent border border-gray-500 dark:border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent"
              placeholder="Email atau nomor telepon"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 dark:text-gray-400 text-base transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-googleblue peer-focus:dark:text-googlebluedark peer-focus:bg-white peer-focus:dark:bg-googlebgdarkpanel peer-focus:px-1 peer-focus:py-2 peer-focus:-translate-y-4"
            >
              Email atau nomor telepon
            </label>
          </div>

          <a
            href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Faccounts.google.com%2F%3Fhl%3Did&ddm=1&dsh=S-1323352796%3A1738301960635856&flowEntry=ServiceLogin&flowName=GlifWebSignIn&followup=https%3A%2F%2Faccounts.google.com%2F%3Fhl%3Did&hl=id&ifkv=AVdkyDnzu37CA1LbMAj6pMatfe4ESbxyLyGsDJwT_erus3VNQTgKYyjKbW4L_fUUmID2_EWlavR-sw"
            className="flex -translate-x-1 w-24 text-googleblue dark:text-googlebluedark hover:bg-googlehover dark:hover:bg-googlehoverdark px-1 rounded-xl"
          >
              Lupa email?
          </a>
          <p>Bukan komputer Anda? Gunakan Private Window untuk login. <a className="text-googleblue dark:text-googlebluedark hover:underline" href="https://support.google.com/accounts?p=signin_privatebrowsing&hl=id">Pelajari lebih lanjut cara menggunakan Mode tamu</a></p>
          <div className="flex gap-4 justify-between items-center">
            <a className="-translate-x-5 px-5 py-2 text-googleblue dark:text-googlebluedark rounded-full hover:bg-googlehover dark:hover:bg-googlehoverdark transition">
              Buat akun
            </a>
            <button className="w-50 px-5 py-2 bg-googleblue text-white rounded-full hover:bg-blue-700 dark:bg-googlebluedark dark:hover:bg-googlebluedark/90 dark:text-blue-950 transition">
              Selanjutnya
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}