import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';

export default function LoginModale() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Connexion</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connexion</DialogTitle>
          <DialogDescription>Connexion a votre compte</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input id="name" placeholder="email" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              placeholder="mot de passe"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Login</Button>
        </DialogFooter>
      </DialogContent>
      <DialogContent>
        <Button onClick={() => signIn('google', { redirectTo: '/' })}>
          sign in with google
        </Button>
        <Button onClick={() => signIn('github', { redirectTo: '/' })}>
          sign in with github
        </Button>
      </DialogContent>
    </Dialog>
  );
}
