import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import UserRegistrationForm from '@/features/_registration/component/UserRegistrationForm';

export default function RegistrationModale() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Inscription</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscription</DialogTitle>
          <DialogDescription>
            Créez votre compte Video Game Collection
          </DialogDescription>
        </DialogHeader>
        <UserRegistrationForm />
      </DialogContent>
    </Dialog>
  );
}
