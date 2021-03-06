export default function info(props) {
    const { name, nomor, nim } = props;
    return (
      <a className="">
        <i class="fa fa" aria-hidden="true"></i>
        <div className="mt-6 flex justify-between">
          <div>
            <p className="mt-1 font-medium text-sm text-gray-900">{name}</p>
            <p className="mt-1 font-medium text-sm text-gray-900">{nomor}</p>
            <p className="mt-1 font-medium text-sm text-gray-900">{nim}</p>
          </div>
        </div>
      </a>
    );
  }
  