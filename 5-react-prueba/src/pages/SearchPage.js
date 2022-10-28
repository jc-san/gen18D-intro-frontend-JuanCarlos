import Card from '../components/Card'
import ListCard from '../components/ListCard'
import SearchFilters from '../components/SearchFilters'

const trainersArray = [
  {
    name: 'Ash Ketchum',
    region: 'Kanto',
    rank: 1,
    team: [
      { name: 'pikachu', level: 100 },
      { name: 'greninja', level: 50 },
      { name: 'x', level: 5 },
    ],
    history: 'lalalalalalala',
  },
  {
    name: 'Misty',
    region: 'Kanto',
    rank: 2,
    team: [
      { name: 'staryu', level: 30 },
      { name: 'psyduck', level: 40 },
      { name: 'psyduck', level: 40 },
      { name: 'psyduck', level: 40 },
    ],
    history: 'lalalalalalala',
  },
]
function SearchPage() {
  return (
    <>
      <SearchFilters></SearchFilters>
      <ListCard>
        {trainersArray.map((trainer, i) => (
          <Card key={i} trainer={trainer}/>
        ))}
      </ListCard>
    </>
  )
}

export default SearchPage
