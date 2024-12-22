import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await prisma.item.findMany();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items', details: error.message });
  }
});

// Update an item by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedItem = await prisma.item.update({
      where: { id: parseInt(id, 10) },
      data: { title, content },
    });
    res.status(200).json(updatedItem);  // Respond with the updated item
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item', details: error.message });
  }
});


// Create a new item
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newItem = await prisma.item.create({
      data: { title, content },
    });
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item', details: error.message });
  }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.item.delete({ where: { id: parseInt(id, 10) } });
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item', details: error.message });
  }
});

export default router;
