import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

const SelectProps = () => {
  return (
    <Select>
      <SelectTrigger className="border-neutral-300">
        <SelectValue placeholder="Selecione um cargo" />
      </SelectTrigger>
      <SelectContent className="w-full">
        <SelectGroup>
          <SelectItem value="farmaceutico">Farmacéutico</SelectItem>
          <SelectItem value="atendente">Atendente</SelectItem>
          <SelectItem value="caixa">Caixa</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectProps;

