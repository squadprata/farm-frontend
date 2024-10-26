import { Card } from '@/components/ui/card'
import FormProfile from './fields'
import { Button } from '@/components/ui/button'
import { ArrowLeft01Icon } from 'hugeicons-react'
import Link from 'next/link'

const CardProfile = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex justify-center">

      <Link href="/usuarios">
        <Button className="absolute left-12 top-20 rounded-full py-4" variant="outline">
          <ArrowLeft01Icon size={16} />
          Voltar
        </Button>
      </Link>


      <Card className="lg:w-7/12 w-11/12 mt-10 p-8">
        <FormProfile params={params} />
      </Card>
    </div>
  )
}

export default CardProfile