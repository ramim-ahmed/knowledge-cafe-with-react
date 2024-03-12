export default function Header() {
  return (
    <div className="border-b py-6 px-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
        <div>
          <img
            className="w-11 h-11 object-cover rounded-full"
            src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
