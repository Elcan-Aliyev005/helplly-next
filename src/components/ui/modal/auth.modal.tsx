import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

export function AuthModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
     DADASDSA
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
}