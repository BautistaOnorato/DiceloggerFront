import EmptyList from "./EmptyList";

const EmptyCampaignList = () => {
  return (
    <EmptyList href={'/campaigns/templates'} title="No se han encontrado campañas..."
    image={'/assets/home/campaigns/Rectangle_9.png'}  />
  )
}

export default EmptyCampaignList;