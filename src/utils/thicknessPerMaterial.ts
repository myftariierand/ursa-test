export const thicknessPerMaterial = (material: any, filter: string) =>
  material
    .filter((el: any) => el.label === filter)
    .map((el: any) => el.thickness)
    .flat()
    .map((el: any) => ({
      label: el,
      value: el
    }))
