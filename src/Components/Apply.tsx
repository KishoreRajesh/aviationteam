import { Button } from '@/Components/ui/button'
import { Input } from '@/Components/ui/input'
import { Label } from '@/Components/ui/label'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <form
        className="bg-white mx-auto w-full max-w-sm border p-0.5 shadow-md rounded-md"
      >
        <div className="p-4">
          <div>
            <Link href="/" aria-label="Go home" />
            <h1 className="text-xl font-semibold text-center mb-1 mt-2">
              Apply to Our Course!
            </h1>
            <p className="text-sm text-center">Get Started! With a simple Click of Button</p>
          </div>

          <hr className="my-4 border-dashed" />

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="firstname" className="block text-sm">
                  Firstname
                </Label>
                <Input type="text" required name="firstname" id="firstname" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastname" className="block text-sm">
                  Lastname
                </Label>
                <Input type="text" required name="lastname" id="lastname" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Username
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pwd" className="block text-sm">
                Password
              </Label>
              <Input type="password" required name="pwd" id="pwd" />
            </div>

            <Button className="w-full">Continue</Button>
          </div>
        </div>
      </form>
    </div>
  )
}