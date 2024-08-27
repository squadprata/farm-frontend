import { Card } from '@/components/ui/card'
import FormProfile from './fields'

const CardProfile = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex justify-center">
      <Card className="lg:w-7/12 w-11/12 mt-10 p-8">
        <FormProfile params={params} />
      </Card>
    </div>
  )
}

export default CardProfile