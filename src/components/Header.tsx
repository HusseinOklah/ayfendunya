import subjects from '@/ui/navigation.json'

export default function Header() {
  return (<header>
    <ul className='container relative flex flex-row gap-10 px-2 mx-auto bg-red-400'>
      {Object.entries(subjects).map(([key, val], i) => (
        <li key={i} className='group py-3 hover:opacity-50'>
          <a href={val.routingTo}>{val.title}</a>
          <ul className='absolute hidden group-hover:flex top-full left-0 w-full h-[350px] flex-col bg-black text-white'>
            {val.Categories.map(x => <li>{x}</li>)}
          </ul>
        </li>
      ))}
    </ul>
  </header>);
}
